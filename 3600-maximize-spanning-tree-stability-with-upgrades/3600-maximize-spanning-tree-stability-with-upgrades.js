class DSU {
    constructor(n) {
        this.parent = Array.from({length:n}, (_, i)=>i);
        this.rank = Array(n).fill(1);
    }
    
    find(u) {
        if (this.parent[u] !== u) this.parent[u] = this.find(this.parent[u]);
        return this.parent[u];
    }
    
    union(u, v) {
        u = this.find(u);
        v = this.find(v);
        if (u === v) return false;
        if (this.rank[u] < this.rank[v]) [u,v] = [v,u];
        this.parent[v] = u;
        if (this.rank[u] === this.rank[v]) this.rank[u]++;
        return true;
    }
}

var maxStability = function(n, edges, k) {
    let maxEdge = 0;
    for (let [_,__,s,_m] of edges) maxEdge = Math.max(maxEdge, s);
    
    let left = 1, right = maxEdge*2, ans = -1;
    
    const chk = (mid) => {
        const dsu = new DSU(n);
        let upgradesLeft = k;
        
        // Include mandatory edges first
        for (let [u,v,s,m] of edges) {
            if (m===1) {
                if (!dsu.union(u,v)) return false; // cycle formed
                if (s < mid) return false; // cannot reach required stability
            }
        }
        
        // Optional edges
        // Sort edges descending so stronger edges first
        const optional = edges.filter(e=>e[3]===0);
        optional.sort((a,b)=>b[2]-a[2]);
        
        for (let [u,v,s,m] of optional) {
            if (dsu.find(u) === dsu.find(v)) continue; // already connected
            if (s >= mid) {
                dsu.union(u,v); // include without upgrade
            } else if (s*2 >= mid && upgradesLeft > 0) {
                dsu.union(u,v);
                upgradesLeft--;
            }
        }
        
        // Check if all nodes connected
        const root = dsu.find(0);
        for (let i=1;i<n;i++) {
            if (dsu.find(i) !== root) return false;
        }
        return true;
    }
    
    while (left <= right) {
        const mid = Math.floor((left+right)/2);
        if (chk(mid)) {
            ans = mid;
            left = mid+1;
        } else {
            right = mid-1;
        }
    }
    
    return ans;
};