Suppose we have a linear functional $L$. We want to approximate it by:
$$L(f)=\sum_{k=1}^n b_kf(c_k)$$
Then using [[Notes/Lagrange Cardinal Polynomials]] we find:
$$L(f)\approx L\left(\sum_{k=1}^nf(c_k)l_k\right)=\sum_{k=1}^nL(l_k)f(c_k) $$
so we choose $b_k=L(l_k)$.

## Gaussian quadrature
Suppose $L(f)=\int_a^bw(x)f(x)dx$. Then we can find $b_k>0$ and $c_k$ s.t. 
$$L(f)=\sum_{k=1}^nb_kf(c_k)$$
is exact for $f\in P_{2n-1}[x]$.
Pick $c_k$ to be roots of $p_n$ where $p_n$ is the $n$th [[Notes/Orthogonal polynomials]] for this weight function, and $b_k=L(l_k)$.
First, by picking $f=l_i^2$ we find $b_i=L(l_i^2)>0$ because $l_i^2$ has degree $2n-2$, so all $b_i$ are positive.

All roots of $p_n$ are distinct and in $(a,b)$.
##### Proof 
Suppose $p_n$ has $m$ roots $\xi_1,\dots,\xi_m$. Define $q(x)=\prod_{j=1}^m(x-\xi_j)$. If $m<n$then $p_n$ is orthogonal to $q$, so $<p,q> =0$. But $pq$ is always positive because they change signs at exactly the same points so this is impossible. 

Now for any polynomial $p\in P_{2n-1}$ we can write it as $p=qp_n+r$ where $q$
and $r$ have degrees at most $n-1$. 
Hence $L(f)=L(qp_n)+L(r)=<q,p_n>+L(r)=L(r)$, but $L(r)$ is exact by choice of $b_k$. 

