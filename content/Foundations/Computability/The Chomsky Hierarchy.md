### Type 0

[[Formal Language]] $\mathcal{L}(G)$ for any [[Grammar]] $G$.

### Type 1

[[Formal Language]] $\mathcal{L}(G)$ for [[Rewrite Rule#Noncontracting|noncontracting]] [[Grammar]] $G$.
[[Noncontracting Formal Language]]

### Type 2

[[Formal Language]] $\mathcal{L}(G)$ for [[Rewrite Rule#Context-free|context free]] [[Grammar]] $G$.
[[Context-Free Formal Language]]

### Type 3

[[Formal Language]] $\mathcal{L}(G)$ for [[Rewrite Rule#Regular|regular]] [[Grammar]] $G$.
[[Regular Formal Language]]

### Example

$L=\{ 0^{n}1^{n}:n>0 \}$ is context-free, not regular.

#### Proof

It is context-free with rewrite rules $S\to 0S 1$ and $S\to 01$ which produce $L$.
It is not regular.
Suppose it is. Then it satisfies [[Regular Pumping Lemma]].
But clearly it doesn't.
