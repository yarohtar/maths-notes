A sequence of [[Analysis/Uniform Cauchy]] functions $f_n$ on $S$ [[Analysis/Converges Uniformly]].
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