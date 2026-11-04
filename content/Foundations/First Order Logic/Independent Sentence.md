Let $L$ be a set of [[First-Order Predicate Logic]] axioms.
Let $\phi$ be a [[Sentence]]
We say that $\phi$ is independent of $L$ if:

$$
L \not\vdash\phi
$$

$$
L \not \vdash \neg \phi
$$

### Example

Let $\Phi$ be the set of axioms of [[Field]]s with [[Characteristic of a ring]] 0.
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
