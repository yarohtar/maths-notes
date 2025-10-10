Let $C_{1}$, $C_{2}$ be [[Notes/Linear Code]] of length $n$ with $C_{2}\subseteq C_{1}$ 
The bar product is:
$$
C_{1}\mid C_{2}=\{ (x\mid x+y):x\in C_{1}, y\in C_{2} \}
$$
It is a linear code of length $2n$.
Note that $\mid$ here represents CONCATENATION.
### Lemma
1. $\operatorname{rank}(C_{1}\mid C_{2})=\operatorname{rank}(C_{1})+\operatorname{rank}(C_{2})$
2. $w(C_{1}\mid C_{2})=\min\{ 2w(C_{1}),w(C_{2}) \}$
#### Proof
1. Let $x_{1}\dots x_{k}$ be a basis for $C_{1}$. Let $y_{1}\dots y_{l}$ be a basis for $C_{2}$.
   Then $\{ (x_{i}\mid x_{i}) \}\cup \{ (0\mid y_{i}) \}$ is a basis for $C_{1}\mid C_{2}$
   Hence $\operatorname{rank}(C_{1}\mid C_{2})=\operatorname{rank}(C_{1})+\operatorname{rank}(C_{2})$
2. Let $x\in C_{1}$ and $y\in C_{2}$, not both zero 
   if $y\neq 0$, $w(x\mid x+y)=w(x)+w(x+y)\geq w(y)\geq w(C_{2})$
   if $y=0$ then $w(x\mid x)\geq 2w(x)\geq 2w(C_{1})$
   So $w(C_{1}\mid C_{2})\geq min\{ 2w(C_{1}),w(C_{2}) \}$
   But the minimums are achieved so this is equal 
