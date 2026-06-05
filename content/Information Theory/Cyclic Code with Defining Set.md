Let $K$ be some [[Algebra/Finite Field]] extension of $\mathbb{F}_{2}$ and $n$ odd
Let $A\subseteq \{ x\in K : x^{n}=1 \}$
The [[Information Theory/Cyclic Code]] of length $n$ with defining set $A$ is the code:
$$
C=\{ f(X)\in \mathbb{F}_{2}[X] /(X^{n}-1): (\forall a\in A)\ f(a)=0 \}
$$
Note that as the [[Information Theory/Generator Polynomial]] $g(X)$ of $C$ divides $X^{n}-1$, 
we only need to ensure that $g(a)=0$ for all $a\in A$.
### Remark
If we let $r\geq 1$ such that $2^{r}=1\pmod{n}$ and set $K\simeq \mathbb{F}_{2^{r}}$
we find that $\mu_{n}(K)=\{ x\in K:x^{n}=1 \}\leq K^{\times}$ 
and $n\mid 2^{r}-1=\lvert K^{\times} \rvert$ so $\mu_{n}(K)$ has $n$ elements.
As $K^{\times}$ is cyclic, so is $\mu_{n}(K)$ so we find:
$$
\mu_{n}(K)=\{ 1,\alpha,\alpha^{2},\dots,a^{n-1} \}
$$
Thus any defining set is $A\subseteq \{ 1,\alpha,\alpha^{2},\dots,\alpha^{n-1} \}$.
### Example
$n=7$
We find $X^{7}-1=(X+1)(X^{3}+X+1)(X^{3}+X^{2}+1)$
where $X^{3}+X+1$ and $X^{3}+X^{2}+1$ have no linear factors, 
so they are irreducible. 
We also find that [[Algebra/Splitting Field]] of $X^{7}-1$ is $\mathbb{F}_{8}\simeq \mathbb{F}_{2} /(X^{3}+X+1)$
In fact, all elements of $\mathbb{F}_{8}^{\times}$ are roots of $X^{7}-1$
Say $\alpha$ is a root of $X^{3}+X+1$.
Then $\alpha^{2}$ and $\alpha^{4}$ also are
So $\alpha^{3}$, $\alpha^{6}$, $\alpha^{5}$ must be roots of $X^{3}+X^{2}+1$
The defining set $A\subseteq\{ \alpha, \alpha^{2},\alpha^{4} \}$
gives $g(X)=X^{3}+X+1$
The defining set $A\subseteq \{ \alpha^{3},\alpha^{6},\alpha^{5} \}$ 
gives $g(X)=X^{3}+X^{2}+1$
If $A$ combines roots from these two sets then 
$g(X)=X^{6}+X^{5}+X^{4}+X^{3}+X^{2}+X+1$
etc.