$X$, $Y$ [[Analysis/Banach Space]], $T\in L(X,Y)$ surjective. Then $T$ is an open mapping.
(ie $\exists k$ st $\forall y\in Y$ )
#### Proof
$T$ surjectivee
So $\bigcup_{n}\overline{T(nB_{x})}=Y$ with each $\overline{T(nB_{x})}$ closed.
Thus by [[Analysis/The Baire Category Theorem]], some $\overline{T(n,B_{x})}$ contains a ball $B(y,\epsilon)$.
WLOG $n=1$: so $T(B_{x})$ dense in $B(y,\epsilon)$.
For any $\eta \in Y$ $\lVert \eta \rVert<\epsilon$ and any $\delta>0$:
Have $\eta+\delta,\eta-\delta \in B(y,\epsilon)$

So there are some $x,x'\in B_{x}$ with $\lVert Tx-(y+\delta) \rVert<\delta$ and $\lVert Tx'-(y-\delta) \rVert<\delta$

Thus $\frac{{x-x'}}{2}\in B_{x}$ and $\left\lVert  T\left( \frac{{x-x'}}{2}-2 \right)  \right\rVert<\delta$
So $T(B_{x})$ dense in $B(0,\epsilon)$.
Thus $T$ any open mapping by [[Analysis/Open Mapping Lemma]] applied to $\frac{T}{\epsilon}$.

### Corollaries
[[Analysis/Inversion Theorem]]
[[Analysis/Comparability Theorem]]