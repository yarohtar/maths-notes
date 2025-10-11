### Type 0
[[XNotes/Formal Language]] $\mathcal{L}(G)$ for any [[XNotes/Grammar]] $G$.
### Type 1
[[XNotes/Formal Language]] $\mathcal{L}(G)$ for [[XNotes/Rewrite Rule#Noncontracting\|noncontracting]] [[XNotes/Grammar]] $G$.
[[XNotes/Noncontracting Formal Language]]
### Type 2
[[XNotes/Formal Language]] $\mathcal{L}(G)$ for [[XNotes/Rewrite Rule#Context-free\|context free]] [[XNotes/Grammar]] $G$.
[[Foundations/Context-Free Formal Language]]
### Type 3
[[XNotes/Formal Language]] $\mathcal{L}(G)$ for [[XNotes/Rewrite Rule#Regular\|regular]] [[XNotes/Grammar]] $G$.
[[XNotes/Regular Formal Language]]

### Example
$L=\{ 0^{n}1^{n}:n>0 \}$ is context-free, not regular.
#### Proof
It is context-free with rewrite rules $S\to 0S 1$ and $S\to 01$ which produce $L$.
It is not regular.
Suppose it is. Then it satisfies [[XNotes/Regular Pumping Lemma]]. 
But clearly it doesn't. 
