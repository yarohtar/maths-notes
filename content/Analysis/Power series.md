Let $\sum a_n(z-a)^n$ be a power series.
### Radius of convergence
Each power series has a radius of convergence $R\in[0,\infty]$ 
s.t. the series converges for all $|z-a|<R$ 
and diverges for all $|z-a|>R$.
#### Proof sketch
Use something like ratio test i think.

### Uniform convergence of power series
Let $R$ be the radius of convergence of a power series. 
Then for any $0<r<R$ the series [[Analysis/Converges Uniformly]] on $D(a,r)$.
#### Proof sketch
Take $w$ s.t. $r<|w-a|<R$, 
By convergence of power series find $M$ s.t. $|a_n(w-a)^n|<M$ for all $n$. 
Then we have ${|z-a|\over |w-a|}<{r\over |w-a|}<1$, so 
$$
|a_n||z-a|^n<|a_n||w-a|^n{r^n\over|w-a|^n}<M{r^n\over |w-a|^n}
$$
So take $M_n=M{r^n\over |w-a|^n}$ and note that $\sum_{n=1}^\infty M_n$ converges (as a geometric series).
Thus for any $\epsilon>0$ find $N$ such that $M_{n}<\epsilon$ for all $n>N$.
Then 
$$
\lvert a_{n}(z-a)^{n} - a_{m}(z-a)^{m} \rvert \leq 2\epsilon
$$
for any $n,m>N$.
We are done by [[Analysis/General Principle of Uniform Convergence]].
### Differentiation of power series
Suppose we have a powerseries $\sum a_n(z-a)^n$ with radius of convergence $R>0$. 
Then the "derived series" $\sum na_n(z-a)^{n-1}$ also has radius of convergence $R$ 
(just do some ineqs)
Now the original powerseires has a point where it converges 
and it's derivative converges uniformly for every $r<R$. 
Let $|x-a|<R$. 
Pick $|x-a|<r<R$. 
Then using [[Analysis/Converges Uniformly#Theorem Diff\|convergence of derivatives]] 
we find the derivative of the powerseries at $x$ is exactly 
$$
\sum_{n=1}^\infty na_n(x-a)^{n-1}
$$
