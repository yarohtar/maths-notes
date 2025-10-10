[[Notes/Axiom of Choice]] $\iff$ [[Notes/Zorn's Lemma]] $\iff$ [[Notes/Well-ordering Principle]]

#### Proof
$AC\implies ZL$ [[Notes/Zorn's Lemma]]
$ZL \implies WOP$ [[Notes/Well-ordering Principle]]
$WOP\implies AC$
Let $X=\{ A_{i}:i\in I \}$ be a set of nonempty sets
Fix a well-ordering of $\bigcup_{i\in I}A_{i}$.
Define $f:I\to \bigcup_{i\in I}A_{i}$ by
$f(i)=\text{the least element of }A_{i}$
Then $f$ is a choice function for $X$.