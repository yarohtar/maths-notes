[[Foundations/Category Theory/Locally Small]]
Let $A$ be an [[Foundations/Category Theory/Object]] of a [[Foundations/Category Theory/Locally Small]] [[Foundations/Category Theory/Category]] $\mathcal{C}$ 
and let $F:\mathcal{C}\to \mathrm{Set}$ be a [[Foundations/Category Theory/Functor]].
Then:
1. there is a bijection between [[Foundations/Category Theory/Natural Transformation]] $\mathcal{C}(A,\cdot)\to F$ and elements of $FA$
2. Moreover, the bijection is [[Foundations/Category Theory/Natural Transformation]] in $A$ and $F$.
### Proof
Given $\alpha:\mathcal{C}(A,\cdot)\to F$ we define $\Phi(\alpha)=\alpha_{A}(1_{A})\in FA$
Given $x\in FA$ we define $\Psi(x):\mathcal{C}(A,\cdot)\to F$ 
by
$$
\Psi(x)_{B}(A\xrightarrow{f}B) = (Ff)(x)\in FB
$$
Naturality of $\Psi(x)$ follows from [[Foundations/Category Theory/Functor]]iality of $F$.
We know 
$$
\Phi\Psi(x) = \Psi(x)_{A}(1_{A}) = F(1_{A})(x)=x
$$
And 
$$
\Psi\Phi(\alpha)_{B}(A\xrightarrow{f}B)=(Ff)(\Phi(\alpha))=(Ff)\alpha_{A}(1_{A})=\alpha_{B}(\mathcal{C}(Af)(1_{A}))=\alpha_{B}(f)
$$
for all $B$ and $f$
So $\Phi$ and $\Psi$ are inverse bijections.


