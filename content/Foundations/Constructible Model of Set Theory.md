The [[Foundations/Constructible Hierarchy]] $L$ satisfies:
$$
L\models ZF
$$
More precisely, we prove for arbitrary $\varphi \in ZF$: 
$$
V\models \text{``}L\models \varphi\,\text{"}
$$
where $V$ is the set theoretic universe $V\models ZF$.
The relation $\text{``}L\models \varphi\,\text{''}$ can be encoded in $V$ for any $\varphi \in ZF$ such that:
$$
V\models \text{``}L\models \varphi\,\text{"} \iff L\models \varphi
$$
in the meta-theory (even when $V$ is a non-standard model).
Thus we usually don't concern ourselves with these issues.
### Proof
We examine the [[Foundations/Set Theory/Axioms of ZF]] individually.
#### Structural axioms
Any [[Foundations/Transitive Model]] satisfies [[Foundations/Set Theory/Axiom of Extensionality]] and [[Foundations/Set Theory/Axiom of Foundation]].
Also $x=\omega$ is [[Foundations/Absolute]], and $\omega$ satisfies [[Foundations/Set Theory/Axiom of Infinity]],
we also get $L_{\alpha}\models$[[Foundations/Set Theory/Axiom of Infinity]] for all $\alpha>\omega$.
#### Functional Axioms
##### Pair and Union
The operations $x,y\to \{ x,y \}$ and $x\to \bigcup x$ are [[Foundations/Absolute Operation]]s
for a [[Foundations/Sufficiently Strong]] $T$.
So we only need to prove
$$
(\forall x,y\in L) \left( \{ x,y \}\in L \land \bigcup x\in L \right)
$$
Assuming $x,y\in L$, take some $\alpha$ such that $x,y\in L_{\alpha}$.
Consider:
$$
\phi(z,x,y) = (z=x)\lor(z=y)
$$
Form
$$
\begin{align}
D(\phi,(x,y),L_{\alpha})  & = \{ z\in L_{\alpha} : L_{\alpha}\models \phi(z,x,y) \} \\
 & =\{ z\in L_{\alpha} : L_{\alpha}\models z=x \lor z=y \} \\
 & =\{ z\in L_{\alpha} : z=x \lor z=y \}  \\
 & = \{ x,y \}
\end{align}
$$
The union is essentially the same.
##### Powerset
This is more complicated, because [[Foundations/Set Theory/Powerset Axiom]] is not [[Foundations/Absolute]]. 
(But if it was [[Foundations/Absolute]], it would be hopeless to find a powerset in a countable model)
Note that $z\subseteq x$ is [[Foundations/Absolute]].
Thus if $L\models p=\mathcal{P}x$ then $p\subseteq \mathcal{P}x$.
Also clearly $p\subseteq L$ as $L$ is [[Foundations/Set Theory/Transitive\|Transitive]].
Thus our candidate is $p=\mathcal{P}x\cap L$.
If $p \in L$ then $p$ satisfies the conditions of the powerset axiom.
Define 
$$
\Omega=\{ \rho_{L}(z) : z\subseteq x, z\in L \}
$$
By [[Foundations/Set Theory/Axiom of Replacement]] this is a set, 
and it is a set of ordinals, so it has to have an upper bound
so there is some $\vartheta$ such that $\Omega \subseteq \vartheta$,
so $p\cap L\subseteq L_{\vartheta}$.
Let
$$
\phi(z,x) = z\subseteq x
$$
then $p=D(\phi,x,L_{\vartheta})$ and thus $p \in L_{\vartheta+1}\subseteq L$.

##### Separation
[[Foundations/Set Theory/Axiom of Separation]]
For any formula $\phi$, we need the set
$$
\{ z\in x: L\models \phi(z,p) \}
$$
where $p$ are parameters.
Take the formula 
$$
\psi(z,x,p) = z\in x\land \phi(z,p)
$$
Then
$$
\begin{align}
D(\psi,(x,p),L_{\alpha})  & = \{ z\in L_{\alpha} : L_{\alpha}\models z\in x \land \phi(z,p) \} \\
 & =\{ z\in x: L_{\alpha}\models \phi(z,p) \}
\end{align}
$$
This only works if $x\in L_{\alpha}$ and $\phi$ is [[Foundations/Absolute]] between $L_{\alpha}$ and $L$.
Apply [[Foundations/Lévy Reflection Theorem]] to find such $\alpha$.
Thus
$$
D(\psi,(x,p),L_{\alpha}) = \{ z\in x:L\models \phi(z,p) \}
$$
and so separation holds.
##### Replacement
[[Foundations/Set Theory/Axiom of Replacement]]
Let $\phi(x,y)$ be a formula such that 
$$
L\models(\forall x)(\forall y)(\forall z)(\phi(x,y)\land \phi(x,z) \implies x=z)
$$
Then we need 
$$
L\models (\forall a)(\exists b)(\forall y)(y\in b\iff (\exists x \in a)\ \phi(x,y))
$$
Fix some $a\in L$ and $\alpha$ such that $a\in L_{\alpha}$.
Let $\psi$ be a formula obtained from $\phi$ by relativizing all quantification to $L$.
Then (for fixed $x,y\in L$) $L\models \phi(x,y)$ if and only if $\psi(x,y)$ 
Using replacement, find $b$ such that 
$$
(\forall y)(y\in b\iff (\exists x\in a)\ \psi(x,y))
$$
Form the set of ordinals
$$
\Omega=\{ \rho_{L}(y): y\in b \land y\in L \} \cup \{ \alpha \}
$$
and take its supremum $\beta$.
Then take $\nu > \beta$ by [[Foundations/Lévy Reflection Theorem]] 
such that $\phi$ is absolute between $L_{\nu}$ and $L$.
Then 
$$
\begin{align}
D((\exists x\in a)\ \phi(x,y), (a), L_{\nu}) & =\{ y\in L_{\nu} : L_{\nu}\models (\exists x\in a)\ \phi(x,y)\} \\
 & =\{ y\in L_{\nu} : L\models(\exists x\in a)\ \phi(x,y) \} \\
 & =\{ y\in L_{\nu} : (\exists x\in a)\ \psi(x,y) \} \\
  & =b\cap L
\end{align}
$$
so $b\cap L\in L$.
But then $b\cap L$ is the witness of replacement in $L$!

