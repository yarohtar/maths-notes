### Type 0
[[Notes/Formal Language]] $\mathcal{L}(G)$ for any [[Notes/Grammar]] $G$.
### Type 1
[[Notes/Formal Language]] $\mathcal{L}(G)$ for [[Notes/Rewrite Rule#Noncontracting\|noncontracting]] [[Notes/Grammar]] $G$.
[[Notes/Noncontracting Formal Language]]
### Type 2
[[Notes/Formal Language]] $\mathcal{L}(G)$ for [[Notes/Rewrite Rule#Context-free\|context free]] [[Notes/Grammar]] $G$.
[[Notes/Context-Free Formal Language]]
### Type 3
[[Notes/Formal Language]] $\mathcal{L}(G)$ for [[Notes/Rewrite Rule#Regular\|regular]] [[Notes/Grammar]] $G$.
[[Notes/Regular Formal Language]]

### Example
$L=\{ 0^{n}1^{n}:n>0 \}$ is context-free, not regular.
#### Proof
It is context-free with rewrite rules $S\to 0S 1$ and $S\to 01$ which produce $L$.
It is not regular.
Suppose it is. Then it satisfies [[Notes/Regular Pumping Lemma]]. 
But clearly it doesn't. 
