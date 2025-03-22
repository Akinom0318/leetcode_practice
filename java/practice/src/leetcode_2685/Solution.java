package leetcode_2685;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int countCompleteComponents(int n, int[][] edges) {
        UnionFind graph = new UnionFind(n);
        ArrayList<Integer> edgeCount = new ArrayList<>(Collections.nCopies(n,0));
        ArrayList<Integer> nodeCount = new ArrayList<>(Collections.nCopies(n,1));

        for(int[] edge : edges){
            int u = edge[0];
            int v = edge[1];
            int rootU = graph.find(u);
            int rootV = graph.find(v);
            graph.union(u ,v);
            int root = graph.find(u);

            edgeCount.set(root, edgeCount.get(rootU) + 1 + (rootU != rootV ? edgeCount.get(rootV) : 0));
            nodeCount.set(root, nodeCount.get(rootU) + (rootU != rootV ? nodeCount.get(rootV) : 0));

        }


        int result = 0;
        HashSet<Integer> set = new HashSet<>();
        for(int i = 0; i < n; i ++){
            int root = graph.find(i);
            if(set.contains(root)){
                continue;
            }


            set.add(root);

            if(nodeCount.get(root) * (nodeCount.get(root) - 1) / 2 == edgeCount.get(root)){
                result ++;
            }
        }


        return result;
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