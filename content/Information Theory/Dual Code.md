Let $C\subseteq \mathbb{F}_{2}^{n}$ be a [[XNotes/Linear Code]]. 
The dual code is the [[XNotes/Parity Check Code]] for $C$:
$$
C^{\bot}=\{ x\in \mathbb{F}_{2}^{n}:(\forall y\in C)\ x\cdot y=0 \}
$$
It is linear. 
### Lemma
$$
\operatorname{rank}C+\operatorname{rank}C^{\bot}=n
$$
Warning: can have $C\cap C^{\bot}\neq \{ 0 \}$
### Corollary
For any [[XNotes/Linear Code]] $C$ 
$$
(C^{\bot})^{\bot}=C
$$
In particular, any linear code is a [[XNotes/Parity Check Code]].
#### Proof
Easy to check $C\subseteq(C^{\perp})^{\perp}$. Then use the lemma.