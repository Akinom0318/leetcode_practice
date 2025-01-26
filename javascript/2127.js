function maximumInvitations(favorite) {
    const n = favorite.length;
    const inDegree = Array(n).fill(0);

    for (let person = 0; person < n; person++) {
        inDegree[favorite[person]]++;
    }

    const queue = [];
    for (let person = 0; person < n; person++) {
        if (inDegree[person] === 0) {
            queue.push(person);
        }
    }

    const depth = Array(n).fill(1);

    while (queue.length > 0) {
        const currentNode = queue.shift();
        const nextNode = favorite[currentNode];
        depth[nextNode] = Math.max(depth[nextNode], depth[currentNode] + 1);
        inDegree[nextNode]--;
        if (inDegree[nextNode] === 0) {
            queue.push(nextNode);
        }
    }

    let longestCycle = 0;
    let twoCycleInvitations = 0;

    for (let person = 0; person < n; person++) {
        if (inDegree[person] === 0) {
            continue;
        }

        let cycleLength = 0;
        let current = person;

        while (inDegree[current] !== 0) {
            inDegree[current] = 0; 
            cycleLength++;
            current = favorite[current];
        }

        if (cycleLength === 2) {
            twoCycleInvitations += depth[person] + depth[favorite[person]];
        } else {
            longestCycle = Math.max(longestCycle, cycleLength);
        }
    }

    return Math.max(longestCycle, twoCycleInvitations);
}



let favorite = [1,0,0,2,1,4,7,8,9,6,7,10,8];
console.log(maximumInvitations(favorite));