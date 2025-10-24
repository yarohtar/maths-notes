Let $L$ be a set of [[Foundations/First Order Logic/First-Order Predicate Logic]] axioms.
Let $\phi$ be a [[Foundations/First Order Logic/Sentence]]
We say that $\phi$ is independent of $L$ if:
$$
L \not\vdash\phi
$$
$$
L \not \vdash \neg \phi
$$
### Example
Let $\Phi$ be the set of axioms of [[Algebra/Field]]s with [[Algebra/Ring Theory/Characteristic of a ring]] 0.
Define
$$
\bar{\phi}(x):= (x^{2}=1+1)
$$
$$
\phi=\exists x\ \bar{\phi}(x)
$$
Then $\phi$ is independent of $\Phi$ because:
$$
\mathbb{Q} \models \neg \phi
$$
$$
\mathbb{Q}[\sqrt{ 2 }] \models \phi
$$
