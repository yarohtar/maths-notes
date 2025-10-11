### Notation
$$
[a_{0};a_{1},a_{2},\dots]=a_{0}+\frac{1}{a_{1}+\frac{1}{a_{2}+\frac{1}{\dots}}}
$$
Additionally, if $a_{0}=0$, we write:
$$
[a_{1},a_{2},\dots] = \frac{1}{a_{1}+\frac{1}{a_{2}+\frac{1}{\dots}}}
$$
We say $[a_{1},\dots,a_{k}]$ is the $k^{th}$ convergent. 
### Recursion
Set $p_{0}=0$, $q_{0}=1$, $q_{1}=a_{1}$
Then $[a_{1},\dots,a_{k}]=p_{k} /q_{k}$ where:
$$
p_{k}=a_{k}p_{k-1}+p_{k-2} 
$$
$$
q_{k}=a_{k}q_{k-1}+q_{k-2}
$$
i.e. we can calculate the convergents quickly. 

### Approximation
Let $0<x<1$ be a rational number, and let $p /q$ be a fraction such that 
$$
\left\lvert  x-\frac{p}{q}  \right\rvert <\frac{1}{2q^{2}}
$$
Then $p/q$ is a convergent of the continued fraction of $x$.
