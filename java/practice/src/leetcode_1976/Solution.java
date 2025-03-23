package leetcode_1976;

import java.util.*;

class Solution {
    public int countPaths(int n, int[][] roads) {
        if (n == 1) return 1;

        long[] dist = new long[n];
        Arrays.fill(dist, Long.MAX_VALUE);

        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }

        long[] dp = new long[n];
        int MOD = (int) 1e9 + 7;
        dp[0] = 1;

        // Construct the graph
        for (int[] road : roads) {
            int u = road[0], v = road[1], weight = road[2];
            graph.get(u).add(new int[]{v, weight});
            graph.get(v).add(new int[]{u, weight});
        }

        // Dijkstra’s Algorithm
        PriorityQueue<long[]> pq = new PriorityQueue<>(Comparator.comparingLong(a -> a[0]));
        pq.offer(new long[]{0, 0});
        dist[0] = 0;

        while (!pq.isEmpty()) {
            long[] top = pq.poll();
            long dis = top[0];
            int node = (int) top[1];

            for (int[] neighbor : graph.get(node)) {
                int v = neighbor[0];
                long weight = neighbor[1];

                if (dist[v] > dis + weight) {
                    dist[v] = dis + weight;
                    dp[v] = dp[node];
                    pq.offer(new long[]{dist[v], v});
                } else if (dist[v] == dis + weight) {
                    dp[v] = (dp[v] + dp[node]) % MOD;
                }
            }
        }

        return (int) (dp[n - 1] % MOD);
    }
}

