There are multiple ways to think of this.
### Additive
For any $r\in \mathbb{F}_{2}^{n}$ define $\chi_{r}(x)=(-1)^{r.x}$ where $r.x=\sum_{i}r_{i}x_{i} \pmod{2}$ (the [[Analysis of Boolean Functions/Character]]s).
Let $f:\mathbb{F}_{2}^{n}\to \mathbb{C}$ and $r\in \mathbb{F}_{2}^{n}$.
Then the [[Analysis of Boolean Functions/Discrete Fourier Transform]] of $f$ is 
$$
\hat{f}(\chi_{r})=\mathop{\Large\mathbb{E}}\limits_{x}(-1)^{r.x}f(x)
$$
We will write $\hat{f}(r)$ instead of $\hat{f}(\chi_{r})$.
### Subsets
Identify each $r\in \mathbb{F}_{2}^{n}$ with $A_{r}=\{ i:r_{i}=1 \}$.
Then $r.x=\lvert A_{r}\cap A_{x} \rvert \pmod{2}$. 
Thus take the group $(\mathcal{P}([n]),\triangle)$ 
and the [[Analysis of Boolean Functions/Discrete Fourier Transform]] of $f:\mathcal{P}([n])\to \mathbb{C}$ is:
$$
\hat{f}(B)=\mathop{\Large\mathbb{E}}\limits_{A\subseteq[n]}f(A)(-1)^{\lvert A\cap B \rvert }
$$
### Multiplicative
Take the group $\{ -1 ,1\}^{n}$ and [[Analysis of Boolean Functions/Character]]s of the form $x\to \prod_{i\in A}x_{i}$ where $A\subseteq[n]$.
We will write this as $x_{A}$. 
Note that the character is actually the function $\bullet_{A}$, 
but we may write $x_{A}$ both for the function and the value at $x$.
The [[Analysis of Boolean Functions/Discrete Fourier Transform]] is then
$$
\hat{f}(A)=\hat{f}(\bullet_{A}) = \mathop{\Large\mathbb{E}}\limits_{x}f(x)x_{A}
$$
