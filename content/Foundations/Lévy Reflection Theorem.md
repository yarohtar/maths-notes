If $\alpha \to Z_{\alpha}$ is a [[Foundations/First Order Logic/Hierarchy]] and $\phi$ any formula then
for any $\gamma$ there is some $\nu>\gamma$ 
such that $\phi$ is [[Foundations/Absolute]] between $Z_{\nu}$ and $Z$.
#### Proof
Fix $\phi$, $\alpha \to Z_{\alpha}$ and $\gamma$.
Let $\Phi$ be the set of subformulas of $\phi$ (it is finite).
For each $\exists x\,\psi \in \Phi$ and $\vec{p}=(p_{1},\dots,p_{n})$ let
$$
o(\psi,\vec{p}) = \begin{cases}
\alpha & \text{least ordinal s.t. }(\exists y\in Z_{\alpha})\,Z\models \Psi(y,\vec{p}) \text{ if exists} \\
0 & \text{otherwise}
\end{cases}
$$
And as $\Phi$ is finite let 
$$
o(\vec{p})=\max_{\exists x\,\psi \in \Phi} o(\psi,\vec{p})
$$
Further define ordinals $\nu_{0}=\gamma+1$ and
$$
\nu_{i+1} = \max \{ \nu_{i}+1, \sup \{ o(\vec{p}) : \vec{p}\in Z_{v_{i}} \} \}
$$
Finally set $\nu=\sup_{i\in \omega}\nu_{i}$.
Note that $\nu$ is a limit so
$$
Z_{\nu} = \bigcup_{i\in \omega} Z_{\nu_{i}}
$$
So any $\vec{p} \in Z_{\nu}$ has some $n$ such that $\vec{p}\in Z_{\nu_{n}}$ so 
$$
\exists x\,\psi(x,\vec{p}) 
$$
has a witness in $Z_{\nu_{n}+1}$.
We are done by [[Foundations/Tarski-Vaught Test]].
### Proposition
Suppose above we take $\nu>\aleph_{1}$, so $\aleph_{1}\in V_{\nu}$.
Let $\phi(x)$ be the statement "$x$ is the smallest uncountable [[Foundations/Ordinals/Ordinal]]"
#### Proof
