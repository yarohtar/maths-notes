Let $B$ be a [[Boolean Algebra]] and $\mathcal{U}$ an [[Ultrafilter]] on $B$.
In particular:

$$
\begin{gather}
a\in \mathcal{U}\land a\leq b\implies b\in \mathcal{U} \\
a\in \mathcal{U} \land b\in \mathcal{U} \iff a\land b\in \mathcal{U} \\
a \in \mathcal{U} \iff \neg a\not\in \mathcal{U}
\end{gather}
$$

(the last property is easy but not trivial)

### Lemma

A set $\mathcal{U}\subseteq B$ is an [[Ultrafilter]] on $B$
if and only if
the characteristic function $u:B\to \{ 0,1 \}$ of $\mathcal{U}$ is a homomorphism.

#### Proof

Let $\mathcal{U}$ be an [[Ultrafilter]] on a [[Boolean Algebra]] $B$.
We prove that the characteristic function $u$ of $\mathcal{U}$ is a homomorphism.
Let $a,b\in B$.

$$
\begin{align}
u(a\land b)=1  & \iff a\land b\in \mathcal{U}  \\
 & \iff a\in \mathcal{U}\land b\in \mathcal{U}  \\
 & \iff u(a)=1 \land u(b)=1  \\
 & \iff u(a)\land u(b)=1
\end{align}
$$

thus $u(a\land b)=u(a)\land u(b)$.
Also

$$
u(\neg a)=0 \iff u(a)=1 \iff \neg u(a)=0
$$

so $u(\neg a)=\neg u(a)$.
Finally, using the previous parts:

$$
\begin{align}
u(a\lor b)=0  & \iff a\lor b\not\in \mathcal{U} \\
 & \iff \neg(a\lor b)\in \mathcal{U} \\
 & \iff \neg a\land \neg b \in \mathcal{U} \\
 & \iff \neg u(a)\land \neg u(b)=1 \\
 & \iff \neg(u(a)\lor u(b))=1 \\
 & \iff u(a)\lor u(b)=0
\end{align}
$$
