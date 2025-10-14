Let $f_n:S\to\mathbb R$ be a sequence of functions. 
We say that $f_n$ is uniformly Cauchy on $S$ if
$\forall\epsilon>0,\exists N\in\mathbb N,\forall x\in S,\forall n,m>N$
$$
|f_n(x)-f_m(x)|<\epsilon
$$
### General principle of uniform convergence
A sequence of uniformly Cauchy functions $f_n$ on $S$ [[Analysis/Uniform convergence of functions\|converges uniformly]].
#### Proof sketch
Find a pointwise limit $f$ of $f_n$ 
which exists by Cauchy stuff for sequences. 
Then fix $\epsilon>0$ and for any $x$ and big enough $n$ find $m$ big enough to make
$$
|f(x)-f_n(x)|\leq |f(x)-f_m(x)|+|f_m(x)-f_n(x)|
$$

### Corollary
Let $f_n$ be a sequence of functions each bounded by $M_n$. 
Suppose $\sum_{n=1}^\infty M_n$ converges. 
Then
$$\sum_{n=1}^\infty f_n$$
converges uniformly.