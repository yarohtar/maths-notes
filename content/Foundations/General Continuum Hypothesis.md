The assertion that for any [[Foundations/Ordinals/Ordinal]] $\alpha$:
$$
2^{\aleph_{\alpha}} = \aleph_{\alpha+1}
$$
### Lemma
Let $L$ be the [[Foundations/Constructible Hierarchy]].
Then 
$$
L\models GCH
$$
### Lemma
It is consistent that $2^{\aleph_{0}}=\aleph_{1}$ (i.e. [[Foundations/The Continuum Hypothesis]])
and at the same time $2^{\aleph_{1}}>\aleph_{2}$.
#### Proof
Define 
$$
\mathrm{Fn}(X,Y,\kappa) = \{ p : (p:X\dashrightarrow Y) \land \lvert p \rvert <\kappa \}
$$
Clearly the [[Foundations/Forcing/Finite Function Forcing]] has 
$$
\mathrm{Fn}(X,Y) = \mathrm{Fn}(X,Y,\aleph_{0})
$$
If we compare $\mathrm{Fn}(X,2)$ and $\mathrm{Fn}(X,2,\aleph_{1})$,
we note that the former does not completely embed into the latter
e.g. take $p':\omega \times \omega \to 2$ the constant function $0$,
then many values are determined to be $0$.

The problem is that $\mathrm{Fn}(\omega_{3}^{M}\times \omega_{1}^{M},2,\aleph_{1})$ does not have [[Foundations/Forcing/Chain Condition\|c.c.c.]] anymore.
The small countable functions above create an [[Foundations/Poset/Antichain]] of size $2^{\aleph_{0}}$

By [[Foundations/Delta System Lemma]] we can show $\mathrm{Fn}(X,2,\kappa^{+})$ has the $(2^{\kappa})^{+}$-[[Foundations/Forcing/Chain Condition]]
Thus in our concrete case, we start from a model of $CH$ so 
$$
M\models 2^{\aleph_{0}}=\aleph_{1}
$$
and force with $\mathbb{P}=\mathrm{Fn}(X,2,\aleph_{1})$ 
which has the $(2^{\aleph_{0}})^{+}$-[[Foundations/Forcing/Chain Condition]],
so that's $\aleph_{1}^{+}=\aleph_{2}$-[[Foundations/Forcing/Chain Condition]].
Then all cardinals $\geq \aleph_{2}$ are preserved.
Because $\mathbb{P}$ is a $\aleph_{1}$-[[Foundations/Forcing/Closed Forcing]], we can see that $\mathbb{P}$ preserves $\aleph_{1}$.
Thus 
$$
M[G]\models 2^{\aleph_{0}}=\aleph_{1}\land 2^{\aleph_{1}}\geq \aleph_{3}
$$
