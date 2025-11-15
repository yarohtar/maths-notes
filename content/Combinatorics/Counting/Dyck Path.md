A path from $(0,0)$ to $(2n,0)$ taking steps $(1,1)$ or $(1,-1)$ 
but never crossing strictly below the $x$-axis

### Theorem
There is $C_{n}$ [[Combinatorics/Counting/Dyck Path]]s from $(0,0)$ to $(2n,0)$
where $C_{n}$ is the [[Combinatorics/Counting/Catalan Number]].
#### Proof
Suppose the path hits $x$-axis for the first time at $(2i,0)$
where $0<i\leq n$
Then we have a Dyck path $(1,1)\to(2i-1,1)$
and one from $(2i,0)\to(2n,0)$.
Thus we find the recurrence
$$
C_{n} =\sum_{i} C_{i-1}C_{n-i}
$$
matching [[Combinatorics/Counting/Catalan Number]]s.
