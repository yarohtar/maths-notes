A [[Foundations/Forcing/Forcing Partial Order]] is called $\lambda$-closed 
if for every $\gamma<\lambda$ and every strictly descending chain 
$$
\{ p_{\xi} : \xi<\gamma \}
$$
there is some $q\in \mathbb{P}$ such that 
$$
(\forall \xi<\gamma)\, q\leq p_{\xi}
$$
### Lemma
Everything is $\aleph_{0}$-closed (but that's not very interesting).
However, [[Foundations/Forcing/Finite Function Forcing]] $\mathrm{Fn}(X,2)$ is not $\aleph_{1}$-closed.
BUT $\mathrm{Fn}(X,2,\aleph_{1})$ is $\aleph_{1}$-closed.
#### Proof
First two bits are trivial.
For the last bit, let $\{ p_{\xi}: \xi<\aleph_{1} \}$ be a descending chain.
Set 
$$
q=\bigcup p_{\xi}\in \mathbb{P}
$$
Then $q\leq p_{\xi}$ for all $\xi<\aleph_{1}$.
### Theorem
Let $M$ be a [[Foundations/First Order Logic/Model]] of $ZFC$ in which $\mathbb{P}$ is $\lambda$-closed and $\alpha<\lambda$.
Let $G$ be $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$ and $f:\alpha \to X$
such that $f\in M[G]$.
Then $f\in M$.
#### Proof
Let $f:\alpha \to X$ with $f\in M[G]$.
Suppose for contradiction that $f\not\in M$.
Consider 
$$
B=\{ f:\alpha \to X \}\cap M \in M
$$
In particular $f\not\in B$.
Let $\tau$ be a name for $f$.
By [[Foundations/Forcing/The Forcing Theorem]] find $p\in G$ such that 
$$
p\Vdash \tau:\check{\alpha}\to \check{X} \land \tau \not\in \check{B}
$$
Define decreasing sequence in $\mathbb{P}$.
Let $p_{0}=p$.
If $\mu<\alpha$ is a limit ordinal, the fact that $\mathbb{P}$ is $\lambda$-closed gives us $p_{\mu}\leq p_{\xi}$ for $\xi<\mu$.
Suppose now that $p_{\gamma}$ is defined and $p_{\gamma}\leq p$.
Since $p_{\gamma}\Vdash \tau:\check{\alpha}\to \check{X}$, we find $q\leq p_{\gamma}$ such that 
$$
q\Vdash \tau(\check{\gamma}) = \check{x}_{\gamma} \land x_{\gamma}\in X
$$
Thus set $p_{\gamma+1}=q$.
This whole definition happens in $M$ (doesn't use $G$)
and so $\{ p_{\gamma}:\gamma<\alpha \}\in M$ and $\{ x_{\gamma}:\gamma<\alpha \}\in M$.
Note that function $h(\gamma)=x_{\gamma}$ is a function $\alpha \to X$ in $M$.
By $\lambda$-closure, find $q\leq p_{\xi}$ for all $\xi<\alpha$.
But then 
$$
q\Vdash \tau:\check{\alpha}\to \check{X} \land \tau \not\in \check{B} \land (\forall \gamma<\alpha)\, \tau(\check{\gamma})=\check{x}_{\gamma}
$$
which cannot be because $q\Vdash \tau \in \check{B}$ (because $h\in B$).
### Corollary
This is a strong preservation theorem:
Forcing with $\mathrm{Fn}(X,2,\aleph_{1})$ can never add a new function $f:\omega \to 2$.
So $2^{\aleph_{0}}$ must remain the same.
