[[Foundations/Axiom of Choice]] $\iff$ [[Foundations/Zorn's Lemma]] $\iff$ [[Foundations/Well-ordering Principle]]

#### Proof
$AC\implies ZL$ [[Foundations/Zorn's Lemma]]
$ZL \implies WOP$ [[Foundations/Well-ordering Principle]]
$WOP\implies AC$
Let $X=\{ A_{i}:i\in I \}$ be a set of nonempty sets
Fix a well-ordering of $\bigcup_{i\in I}A_{i}$.
Define $f:I\to \bigcup_{i\in I}A_{i}$ by
$f(i)=\text{the least element of }A_{i}$
Then $f$ is a choice function for $X$.