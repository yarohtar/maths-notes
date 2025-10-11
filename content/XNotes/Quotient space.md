Let $(X,\tau)$ be a topological space and $R$ an equivalence relation on $X$. Define the quotient map $q:X\to X/R$ with $q(x)=[x]$. Equip this space with the quotient topology:
$$\tau_R=\{V\subset X/R: q^{-1}(V)\in\tau\}$$
By this definition, $q$ is continuous and surjective.

Now suppose $X$ and $Y$ are topological spaces with a relation $R$ on $X$. Let $q:X\to X/R$ and $f:X\to Y$ s.t. $xRy\implies f(x)=f(y)$. Then we can find $\tilde f:X/R\to Y$ s.t. $f=\tilde f \circ q$. 
1. If $f$ is continuous, so is $\tilde f$
2. If $f$ is open, so is $\tilde f$
#### Proof
1. Let $V$ be open in $Y$. Then $f^{-1}(V)$ is open in $X$. Now $q^{-1}(\tilde f^{-1}(V))$ is open, so by definition $\tilde f^{-1}(V)$ is open.
2. Let $U$ be open in $X/R$. Then $q^{-1}(U)$ is open so $f(q^{-1}(U))$ is open i.e. $\tilde f(q(q^{-1}(U)))$ is open. But, as $q$ is surjective, we have $q(q^{-1}(U))=U$, hence $\tilde f(U)$ is open.

### Corollary
If $f$ is surjective, continuous and open and $xRy\iff f(x)=f(y)$, then $\tilde f$ is a homeomorphism.