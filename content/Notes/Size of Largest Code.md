$A(n,d)$ is the largest possible size $m$ of a $[n,m,d]$ [[Notes/Binary Code]].
$$
A(n,d)=max\{ m:\exists[n,m,d]\text{-code} \}
$$
### Lemma
$$
A(n,d+1)\leq A(n,d)
$$
#### Proof
Let $m=A(n,d+1)$ and let $C$ be a $[n,m,d+1]$ code.
Let $c_{1},c_{2}\in C$ be two distinct codewords such that $d(c_{1},c_{2})=d+1$. 
Let $c_{1}'$ differ from $c_{1}$ in exactly one of the places where $c_{1}$ and $c_{2}$ differ.
Then $d(c_{1}',c_{2})=d$, and for any $c\in C$ we have 
$$
d+1\leq d(c,c_{1})\leq d(c,c_{1}')+d(c_{1}',c_{1})=d(c,c_{1}')+1
$$
thus $d(c,c_{1}')\geq d$, so by replacing $c_{1}$ with $c_{1}'$ we get a $[n,m,d]$ code
### Proposition
$$
\frac{2^{n}}{V(n,d-1)}\leq A(n,d)\leq \frac{2^{n}}{V\left( n,\left\lfloor  \frac{d-1}{2}  \right\rfloor  \right)}
$$
#### Proof
[[Notes/Hamming's Bound]]
[[Notes/Gilbert-Shannon-Varshamov Bound]]

### Example
$$
\frac{2^{10}}{56}\leq A(10,3)\leq \frac{2^{10}}{11}
$$
$$
19\leq A(10,3)\leq 93
$$
$A(10,3)=72$ discovered in 1999. 

