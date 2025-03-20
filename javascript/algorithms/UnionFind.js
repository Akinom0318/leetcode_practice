class Union{
    // number of vertices
    constructor(n){
        this.parent = Array.from({length: n},(_, i) =>ｉ);
        this.rank = new Array(n).fill(0);   
    }

    find(i){
        let root = this.parent[i];
        if(this.parent[root] !== root){
            return this.parent[i] = his.find(root);
        }

        return root;
    }

    unionSet(x, y){
        let rootX = find(x);
        let rootY = find(y);

        if(this.rank[rootX] < this.rank[rootY]){
            this.parent[rootX] = rootY;
        }else if(this.rank[rootY] < this.rank[rootX]){
            this.parent[rootY] = rootX;
        }else{
            this.parent[rootY] = rootX;
            this.rank[rootX] ++;
        }
    }

}