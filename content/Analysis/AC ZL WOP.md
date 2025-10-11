[[Foundations/Axiom of Choice]] $\iff$ [[XNotes/Zorn's Lemma]] $\iff$ [[XNotes/Well-ordering Principle]]

#### Proof
$AC\implies ZL$ [[XNotes/Zorn's Lemma]]
$ZL \implies WOP$ [[XNotes/Well-ordering Principle]]
$WOP\implies AC$
Let $X=\{ A_{i}:i\in I \}$ be a set of nonempty sets
Fix a well-ordering of $\bigcup_{i\in I}A_{i}$.
Define $f:I\to \bigcup_{i\in I}A_{i}$ by
$f(i)=\text{the least element of }A_{i}$
Then $f$ is a choice function for $X$.