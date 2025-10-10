Let $C\subseteq \mathbb{F}_{2}^{n}$ be a [[Notes/Linear Code]]. 
The dual code is the [[Notes/Parity Check Code]] for $C$:
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
For any [[Notes/Linear Code]] $C$ 
$$
(C^{\bot})^{\bot}=C
$$
In particular, any linear code is a [[Notes/Parity Check Code]].
#### Proof
Easy to check $C\subseteq(C^{\perp})^{\perp}$. Then use the lemma.