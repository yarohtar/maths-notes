We prove that if $M\models ZFC$ then there is a [[Foundations/Transitive Model]] $N\subseteq M$
such that 
$$
N\models ZFC+CH
$$
where $CH$ is [[Foundations/The Continuum Hypothesis]]:
$$
2^{\aleph_{0}}=\aleph_{1}
$$
[[Foundations/Sufficiently Strong]]
[[Foundations/Absoluteness of Truth in a Model]]

### Proof
Let $L$ be the [[Foundations/Constructible Hierarchy]].
We want to prove that
$$
L\models ZF(C)
$$
Any [[Foundations/Transitive Model]] satisfies [[Foundations/Set Theory/Axiom of Extensionality]] and [[Foundations/Set Theory/Axiom of Foundation]].
Also $X=\omega$ is [[Foundations/Absolute]], and $\omega$ satisfies [[Foundations/Set Theory/Axiom of Infinity]],
we also get $L_{\alpha}\models$[[Foundations/Set Theory/Axiom of Infinity]] for all $\alpha>\omega$.
The operations $x,y\to \{ x,y \}$ and $x\to \bigcup x$ are [[Foundations/Absolute Operation]]
for a [[Foundations/Sufficiently Strong]] $T$.
So we only need to prove
$$
(\forall x,y\in L) \left( \{ x,y \}\in L \land \bigcup x\in L \right)
$$
Find $\{ x,y \}$ in $L$.
Assume $x,y\in L$.
Take some $\alpha$ such that $x,y\in L_{\alpha}$.
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
The union is exactly the same.
Now we consider the [[Foundations/Set Theory/Power-set axiom]]
This is more complicated, because it is not [[Foundations/Absolute]]. 
(But if it was absolute, it would be hopeless to find a powerset in a countable model)
Note that $z\subseteq x$ is [[Foundations/Absolute]].
Thus if $p$ is a powerset of $x$ then $p\subseteq \mathcal{P}x$.
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

Now consider [[Foundations/Set Theory/Axiom of Separation]].
We need the set
$$
\{ z\in x: L\models \phi(z,p) \}
$$
where $p$ are parameters.
Take formula 
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
This only works if $\phi$ is [[Foundations/Absolute]] between $L_{\alpha}$ and $L$.
Apply [[Foundations/Lévy Reflection Theorem]] to find $\alpha$ 
such that $\phi$ is [[Foundations/Absolute]] between $L_{\alpha}$ and $L$.
Thus
$$
D(\psi,(x,p),L_{\alpha}) = \{ z\in x:L\models \phi(z,p) \}
$$
and so separation holds.

[[Foundations/Set Theory/Axiom of Replacement]] is on Example Sheet 2.

The only one left is the [[Foundations/Set Theory/Axiom of Choice]]
We can provide a [[Foundations/Ordinals/Well-ordered\|well-order]] of $L$:
Fix some some $<_{\omega}$ on $L_{\omega}$ of [[Foundations/Set Theory/Order Type]] $\omega$.
Assume that $<_{\alpha}$ is a wellorder of $L_{\alpha}$,
define lexifcographically a wellorder of 
$$
\mathrm{Fml}\times L_{\alpha}
$$
and then write for $x\in L_{\alpha+1}$ 
$$
w(x) = \mathrm{min}_{<_{\alpha}} \{ (\phi,p) : x=D(\phi,p,L_{\alpha}) \}
$$
Make this into an end-extension of $<_{\alpha}$ by
$$
\begin{align}
x<_{\alpha+1} y  & \iff x,y\in L_{\alpha} \land x<_{\alpha}y  \\
 & \text{OR } x\in L_{\alpha} \land y\in L_{\alpha+1} \setminus L_{\alpha} \\
 & \text{OR } x,y\not\in L_{\alpha} \land w(x)<w(y)
\end{align}
$$
Thus 
$$
< = \bigcup_{\alpha \in \mathrm{Or d}} <_{\alpha}
$$
is a [[Foundations/Ordinals/Well-ordered\|well-order]] of $L$.
However, this was a recursive definition so its [[Foundations/Absolute]] so:
$$
\mathrm{Cons}(ZF) \implies \mathrm{Cons}(ZFC)
$$
and in particular [[Foundations/Set Theory/Axiom of Choice]] holds in $L$.
[[Foundations/Axiom of Constructibility]]
[[Foundations/First Order Logic/Gödel's Incompleteness Theorems]]
[[Foundations/Gödel's Condensation Lemma]]
### Claim
For every $x\subseteq \mathbb{N}$, $x\in L$, there is some $\alpha<\omega_{1}$ such that $x\in L_{\alpha}$.

THIS PROVES CH
