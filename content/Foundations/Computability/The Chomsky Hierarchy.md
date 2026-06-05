### Type 0
[[Foundations/Computability/Formal Language]] $\mathcal{L}(G)$ for any [[Foundations/Computability/Grammar]] $G$.
### Type 1
[[Foundations/Computability/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Computability/Rewrite Rule#Noncontracting\|noncontracting]] [[Foundations/Computability/Grammar]] $G$.
[[Foundations/Computability/Noncontracting Formal Language]]
### Type 2
[[Foundations/Computability/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Computability/Rewrite Rule#Context-free\|context free]] [[Foundations/Computability/Grammar]] $G$.
[[Foundations/Computability/Context-Free Formal Language]]
### Type 3
[[Foundations/Computability/Formal Language]] $\mathcal{L}(G)$ for [[Foundations/Computability/Rewrite Rule#Regular\|regular]] [[Foundations/Computability/Grammar]] $G$.
[[Foundations/Computability/Regular Formal Language]]

### Example
$L=\{ 0^{n}1^{n}:n>0 \}$ is context-free, not regular.
#### Proof
It is context-free with rewrite rules $S\to 0S 1$ and $S\to 01$ which produce $L$.
It is not regular.
Suppose it is. Then it satisfies [[Foundations/Computability/Regular Pumping Lemma]]. 
But clearly it doesn't. 
