package leetcode_3108;

import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public int[] minimumCost(int n, int[][] edges, int[][] query) {
        UnionFind union = new UnionFind(n);
        ArrayList<Integer> minCost = new ArrayList<>(Collections.nCopies(n,-1));

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int weight = edge[2];

            if (minCost.get(union.find(u)) != -1 && minCost.get(union.find(v)) != -1) {
                int tmp = minCost.get(union.find(u)) & minCost.get(union.find(v)) & weight;
                union.union(u, v);
                minCost.set(union.find(u), tmp);
            } else {
                union.union(u, v);

                if (minCost.get(union.find(u)) == -1) {
                    minCost.set(union.find(u), weight);
                } else {
                    minCost.set(union.find(u), minCost.get(union.find(u)) & weight);
                }

            }

        }

        ArrayList <Integer>result = new ArrayList<>(n);
        for (int[] q : query) {
            int start = q[0];
            int end = q[1];
            if (union.find(start) == union.find(end)) {
                result.add(minCost.get(union.find(end)));
            } else {
                result.add(-1);
            }
        }

        int[] intResult = new int[query.length];
        for(int i = 0; i < result.size(); i ++){
            intResult[i] = result.get(i);
        }

        return intResult;
    }
}

class UnionFind {
    private final int[] parent;
    private final int[] rank;

    public UnionFind(int n) {
        parent = new int[n];
        rank = new int[n];

        for (int i = 0; i < n; i++) {
            parent[i] = i;
            rank[i] = 0;
        }
    }

    public int find(int i) {
        if (parent[i] != i) {
            parent[i] = find(parent[i]);
        }
        return parent[i];
    }

    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
}