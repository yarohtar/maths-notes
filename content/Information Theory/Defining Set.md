Let $C$ be a [[Information Theory/Cyclic Code]] of length $n$ (where $n$ is odd)
Let $K$ be a field extension of $\mathbb{F}_{2}$
A defining set $A$ of $C$ is a set with the property:
$$
(\forall f\in \mathbb{F}_{2}[X])\ f(X)+(X^{n}-1)\in C \iff (\forall a\in A)\ f(a)=0
$$
Note that necessarily $A\subseteq \{ x\in K:x^{n}=1 \}$ for nonempty $C$.
Also $A$ need not be unique

We say a [[Information Theory/Cyclic Code]] $C$ is defined by $A\subseteq \{ x\in K :x^{n}=1\}$ if:
$$
C=\{ f\in F[X] /(X^{n}-1) : (\forall a\in A)\ f(a)=0 \}
$$
### Remark
We usually work with $K$ the [[Algebra/Splitting Field]] of $X^{n}-1$ 
(which can be shown to be $\mathbb{F}_{2^{r}}$ where $2^{r}=1\pmod{n}$)



# This wasn't done in lectures like this
See [[Information Theory/Cyclic Code with Defining Set]]