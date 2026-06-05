Let $\mathcal{L}=\{ < \}$ be a [[Foundations/First Order Logic/Language]]
We define DLO to be the $\mathcal{L}$-[[Foundations/First Order Logic/Theory]] with axioms:
1. $(\forall x)\  \neg(x<x)$
2. $(\forall x,y,z)\ x<y\land y<z \implies x<z$
3. $(\forall x,y)\ x\neq y\implies x<y\lor y<x$
4. $(\forall x,y)\ x<y\implies(\exists z)\ x<z<y$
5. $(\forall x)\,(\exists y,z)\ y<x<z$
## Theorem
DLO is $\aleph_{0}$-[[Foundations/First Order Logic/Categorical]].
### Proof
Back and forth argument.
Fix countable [[Foundations/First Order Logic/Model]]s $\mathcal{M},\mathcal{N}\models \mathrm{DLO}$.
Let $M=\{ a_{n}:n\geq 0 \}$ and $N=\{ b_{n}:n\geq 0 \}$.
We inductively construct a sequence of order-preserving bijections $(h_{n})_{n=0}^{\infty}$.
Set $h_{0}=\{ (a_{0},b_{0}) \}$.
#### Forth
First construct an order preserving bijection $h_{*}:X_{*}\to Y_{*}$.
Enumerate $X_{n}=\{ x_{1},\dots,x_{k} \}$ such that 
$$
x_{1}<^{\mathcal{M}}x_{2}<^{\mathcal{M}}<\dots<^{\mathcal{M}}x_{k}
$$
Now let $y_{i}=h_{n}(x_{i})$.
By induction hypothesis:
$$
y_{1}<^{\mathcal{N}}\dots<^{\mathcal{N}}y_{k}
$$
We define $h_{*}:=h_{n}\cup \{ (a_{n+1},b) \}$ where $b\in N$ is chosen as follows:
$$
b=\begin{cases}
y_{i} & \text{if }a_{n+1}=x_{i} \text{ for some }i\leq k  \\
u(y_{k})  & \text{if } x_{k}<^{\mathcal{M}}a_{n+1} \text{ where }y_{k}<^{\mathcal{N}}u(y_{k}) \\
l(y_{1}) & \text{if }a_{n+1}<^{\mathcal{M}}x_{1} \text{ where } l(y_{1})<^{\mathcal{N}} y_{1} \\
b(y_{i},y_{i+1})  &  \text{if } x_{i}<^{\mathcal{M}}a_{n+1}<^{\mathcal{M}}x_{i+1} \text{ for some }i\leq k\text{ where } y_{i}<^{\mathcal{N}}b(y_{i},y_{i+1})<^{\mathcal{N}}y_{i+1}
\end{cases}
$$
#### Back
We construct $h_{n+1}:X_{n+1}\to Y_{n+1}$ extending $h_{*}$ such that $b_{n+1}\in Y_{n+1}$. 
#### 
---
We can thus define $h=\bigcup_{n}h_{n}$ and check that it is an [[Foundations/First Order Logic/Structure Isomorphism\|Isomorphism]].
## Corollary
DLO is a [[Foundations/First Order Logic/Complete Theory]].
### Proof
Clearly, there are no countable models.
By previous theorem, any two countable models have: $\mathcal{M}\cong \mathcal{N}$ 
and thus they are [[Foundations/First Order Logic/Elementary Equivalent Structures\|Elementary Equivalent]].
We are done by [[Foundations/First Order Logic/Vaught's Test]].

