Let $M$ be a countable [[Foundations/Transitive Model]] of $ZFC$.
Consider $\mathbb{P}=\mathrm{Fn}(\omega_{2}^{M}\times \omega, 2)$, the [[Foundations/Forcing/Finite Function Forcing]] (in $M$)
Let $G$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$ and 
$$
f=\bigcup G
$$
Then $f$ is a binary $\omega_{2}^{M}\times \omega$ matrix, and each row is a subset of $\omega$.
For $\alpha \neq \beta$ with $\alpha,\beta<\omega_{2}^{M}$ define 
$$
D_{\alpha,\beta} = \{ p\in \mathbb{P} : (\exists u\in \omega)\, p(\alpha,u) \neq p(\beta,u) \}
$$
This is a set $D_{\alpha,\beta}\in M$ and it is [[Foundations/Poset/Dense Below\|Dense]] in $\mathbb{P}$.
Therefore 
$$
\hat{f}(\alpha) = \{ n : f(\alpha,n) = 1 \}
$$
is an injection from $\omega_{2}^{M}$ into $\mathcal{P}(\omega)$.
Thus we have proved that in the [[Foundations/Forcing/Model Extension by Finite Function Forcing]]: 
$$
M[G] \models 2^{\aleph_{0}} \geq \lvert \omega_{2}^{M} \rvert 
$$
We are not done yet!
We need $\omega_{2}^{M}=\omega_{2}^{M[G]}$ (which needs $\omega_{1}^{M}=\omega_{1}^{M[G]}$).
By the lemma below, $\mathbb{P}$ has [[Foundations/Forcing/Chain Condition\|c.c.c.]]
Also, [[Foundations/Forcing/Chain Condition]] forcing preserves [[Foundations/Regular Cardinal]]s.
Thus we are done (as both $\omega_{1}$ and $\omega_{2}$ are successors, thus [[Foundations/Regular Cardinal\|Regular]])
### Lemma
For any $X$, $\mathbb{P}=\mathrm{Fn}(X,2)$ has the [[Foundations/Forcing/Chain Condition\|c.c.c.]]
#### Proof
Suppose $A\subseteq \mathbb{P}$ is uncountable.
Fix $a\in A$ and consider 
$$
\begin{gather}
d_{a}=\mathrm{dom}(a) \subseteq X \\
S=\{ d_{a}:a\in A \}
\end{gather}
$$
This is an uncountable set of finite sets, 
so by [[Foundations/Delta System Lemma]] find $D\subseteq S$ an uncountable [[Foundations/Delta System]] with root $r$.
By pigeonhole, find $a\neq b$ in $A$ such that 
$$
a|_{r} = b|_{r}
$$
But now $d_{a}\cap d_{b}=r$ so $a$ and $b$ are compatible.
Thus $A$ is not an [[Foundations/Poset/Antichain]], so $\mathbb{P}$ has [[Foundations/Forcing/Chain Condition\|c.c.c.]]
### Remark
Same proof works for any $\mathbb{P}=\mathrm{Fn}(\omega_{n}^{M}\times \omega,2)$
i.e. we can make the continuum as large as we like.
Note that we have not yet proven that 
$$
2^{\aleph_{0}}=\lvert \omega_{2} \rvert 
$$
is consistent, but merely that $2^{\aleph_{0}}>\lvert \omega_{1} \rvert$ is consistent.
### Theorem
In the setup as above, if $M\models 2^{\aleph_{0}}\leq \aleph_{2}$ then 
$$
M[G] \models 2^{\aleph_{0}} = \aleph_{2}
$$
#### Proof
By the [[Foundations/Forcing/Number of Nice Names]] we can find
$$
M[G] \models 2^{\aleph_{0}} \leq \aleph_{2}^{\aleph_{0}}
$$
By [[Foundations/Hausdorff's Formula]] calculate 
$$
\begin{gather}
\aleph_{0}^{\aleph_{0}}=2^{\aleph_{0}} \\
\aleph_{1}^{\aleph_{0}}=\aleph_{1}\cdot \aleph_{0}^{\aleph_{0}}=2^{\aleph_{0}} \\
\aleph_{2}^{\aleph_{0}}=\aleph_{2}\cdot \aleph_{1}^{\aleph_{0}}=\max(\aleph_{2},2^{\aleph_{0}})
\end{gather}
$$
So there is at most $\aleph_{2}$ [[Foundations/Forcing/Nice Name]]s of subsets of $\aleph_{0}$ in $M$.
Thus we conclude 
$$
M[G]\models 2^{\aleph_{0}}\leq \aleph_{2}
$$
but we have already shown 
$$
M[G] \models 2^{\aleph_{0}} \geq \aleph_{2}
$$
