### Type 0
[[Foundations/Formal Language]] $\mathcal{L}(G)$ for any [[Foundations/Grammar]] $G$.
### Type 1
[[Foundations/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Rewrite Rule#Noncontracting\|noncontracting]] [[Foundations/Grammar]] $G$.
[[Foundations/Noncontracting Formal Language]]
### Type 2
[[Foundations/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Rewrite Rule#Context-free\|context free]] [[Foundations/Grammar]] $G$.
[[Foundations/Context-Free Formal Language]]
### Type 3
[[Foundations/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Rewrite Rule#Regular\|regular]] [[Foundations/Grammar]] $G$.
[[Foundations/Regular Formal Language]]

### Example
$L=\{ 0^{n}1^{n}:n>0 \}$ is context-free, not regular.
#### Proof
It is context-free with rewrite rules $S\to 0S 1$ and $S\to 01$ which produce $L$.
It is not regular.
Suppose it is. Then it satisfies [[Foundations/Regular Pumping Lemma]]. 
But clearly it doesn't. 
