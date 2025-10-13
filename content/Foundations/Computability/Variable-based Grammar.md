Let $G=(\Sigma,V,S,P)$ be a [[Foundations/Computability/Grammar]]
Suppose that $P$ only contains rules whose LHS is a string in $V^{+}$
Then we say that $G$ is a variable based grammar.
### Lemma
Every grammar is equivalent to a variable-based grammar
#### Proof
Idea: For each terminal symbol $a\in \Sigma$, define a variable $X_{a}$ and add appropriate rules $P'=\{ X(\alpha)\to X(\beta):\alpha \to \beta \in P \}$ and also add recovery rules $\{ X_{a}\to a : a\in \Sigma\}$.
Then prove that the languages are the same