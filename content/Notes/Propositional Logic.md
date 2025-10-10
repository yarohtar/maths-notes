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

[[Notes/Valuation (Propositional Logic)]]
[[Notes/Tautology (Propositional Logic)]]
[[Notes/Abbreviations in Propositional Logic]]
[[Notes/Semantic Entailment (Propositional Logic)]]
[[Notes/True (Propositional Logic)]]
[[Notes/Model (Propositional Logic)]]
[[Notes/Syntactic Entailment (Propositional Logic)]]