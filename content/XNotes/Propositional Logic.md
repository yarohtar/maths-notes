The language of propositional logic consists of 
a set $P$ of primitive propositions 
and the set $L=L(P)$ of propositions 
(or compound propositions) 
defined as follows:
1. $P\subseteq L$
2. $\bot\in L$
3. if $p,q\in L$ then $(p \implies q)\in L$

We further define $L_{1}=P\cup \{ \bot \}$ and 
$L_{n+1}=\{ p \implies q: p,q\in L_{n} \}$
Then $L = \bigcup_{n}L_{n}$

[[XNotes/Valuation (Propositional Logic)]]
[[XNotes/Tautology (Propositional Logic)]]
[[Foundations/Abbreviations in Propositional Logic]]
[[XNotes/Semantic Entailment (Propositional Logic)]]
[[XNotes/True (Propositional Logic)]]
[[XNotes/Model (Propositional Logic)]]
[[XNotes/Syntactic Entailment (Propositional Logic)]]