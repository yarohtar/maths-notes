Given a number $N$, find a nontrivial factor.

We try to use [[XNotes/Periodicity Determination]] on a function $f(x)=a^{x}\pmod{N}$ finding some smallest period $r$.
If $r$ is even, we find that 
$$
N\mid a^{r}-1=(a^{r/2}-1)(a^{r/2}+1)
$$
As $r$ is the smallest period, it cannot be that $N\mid a^{r/2}-1$. 
Now $gcd(N,a^{r/2}+1)$ may give us a nontrivial factor of $N$.
This is likely to succeed. 

### Finding the period
Let $m$ be the smallest integer such that $M=2^{m}\geq N^{2}$.
Pick a random integer $2\leq a<N$.
We try to implement [[XNotes/Periodicity Determination]] of $f(x)=a^{x}\pmod{N}$ on a whole domain $\mathbb{Z}_{M}$.
Start from state $\ket{0\dots 0}\ket{0}$.
Apply $H^{n}$ on the first $n$ registers:
$$
\frac{1}{\sqrt{ 2^{m} }}\sum_{x}\ket{x} \ket{0}
$$
Apply the quantum oracle $U_{f}$ for $f$:
$$
\frac{1}{\sqrt{ M }}\sum_{x}\ket{x} \ket{f(x)}
$$
We measure the last register leaving the state in:
$$
\frac{1}{\sqrt{ A }}\sum_{l}\ket{x_{0}+lr} 
$$
for some $A\approx \frac{M}{r}$
Apply $QFT_{M}$ to get
$$
\frac{1}{\sqrt{ A }}\sum_{l} \frac{1}{\sqrt{ M }} \sum_{c} \omega^{x_{0}c+lrc}\ket{c}
$$
$$
\frac{1}{\sqrt{ AM }}\sum_{c}\omega^{x_{0}c}\sum_{l}\omega^{lrc}\ket{c}
$$
Now we need to look closely into $\alpha=\omega^{rc}=\exp(2i\pi rc / 2^{m})$
in particular, we want $rc / 2^{m}$ to be close to an integer, say $rc / 2^{m}\approx n$
In that case, $c / 2^{m}\approx n / r$. 
Note that there is a unique integer $c_{n}$ such that 
$$
\left\lvert  c_{n}-\frac{2^{m}n}{r}  \right\rvert \leq\frac{1}{2}
$$
The probability of measuring such $c_{n}$ turns out to be at least $\frac{4}{r\pi^{2}}$.
We do have $r$ candidates, so the probability of measuring $c_{n}$ for some $n$ is at least $4 /\pi^{2}$. 

Given some $c_{n}$ we need to extract $r$ from it.
We find the [[Algebra/Continued Fraction]] of $\frac{c_{n}}{2^{m}}$. 
Checking it's convergents we look for $p /q$ such that:
$$
\left\lvert  \frac{c_{n}}{2^{m}}-\frac{p}{q}  \right\rvert < \frac{1}{2^{m+1}}\leq \frac{1}{2N^{2}}
$$
and $q<N$.
Having found one such $p /q$, we reduce it to lowest terms, and pray that $q=r$ AND $r$ is even. 
We can easily check this.
If we are lucky, we can apply the reasoning at the start of this page (otherwise, repeat the whole process with a different $a$)