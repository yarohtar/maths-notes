Let $S$ be a [[Foundations/First Order Logic/Theory]] in a countable language (i.e. $\Omega \cup \Pi$ is countable)
If $S$ has a [[Foundations/First Order Logic/Model]], then $S$ has a countable model.
#### Proof
By the [[Foundations/First Order Logic/Soundness Theorem]], $S$ is consistent.
Then the model constructed in the proof of [[Foundations/First Order Logic/Model Existence Lemma]] is countable. 
### Refinement
Let $N$ be a [[Foundations/First Order Logic/Model]], and $\Phi$ any set of formulas.
Then there is a countable $M\subseteq N$ 
such that $M$ is a [[Foundations/Substructure]] of $N$
and all formulas in $\Phi$ are [[Foundations/Absolute]] between $M$ and $N$.
#### Proof
WLOG $\Phi$ is closed under subformulas.
Let $\exists x\,\psi \in \Phi$
Define, using [[Foundations/Set Theory/Axiom of Choice]]:
$$
w(\psi,\vec{p}) = \begin{cases}
x & \text{if } N\models \psi(x,\vec{p}) \text{ for some }x \\
\varnothing & \text{otherwise}
\end{cases}
$$
Then define $M_{0}=\varnothing$ and 
$$
M_{n+1} = M_{n} \cup \{ w(\psi,\vec{p}) : \exists x\,\psi \in \Phi \land \vec{p}\in M_{n}^{<\omega}\}
$$
and set
$$
M=\bigcup_{n\in \omega} M_{n}
$$
We can show that all formulas are [[Foundations/Absolute]] between $M$ and $N$ 
using [[Foundations/Tarski-Vaught Test]].
By induction, all $M_{n}$ are countable:
$$
\lvert M_{n+1} \rvert \leq \lvert M_{n} \rvert + \aleph_{0} \lvert M_{n}^{<\omega} \rvert 
$$
Then $M$ is countable.
