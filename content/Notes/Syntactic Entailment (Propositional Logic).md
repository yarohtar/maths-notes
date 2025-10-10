A notion of proof consists of axioms and rules of deduction.
# Axioms
In [[Notes/Propositional Logic]] we adopt three axioms schemes
as axioms. They are all [[Notes/Tautology (Propositional Logic)]]
## A1
$$
 p \implies(q \implies p)
$$
for all $p,q \in L$
## A2
$$
((p \implies(q\implies r))\implies((p \implies q)\implies(p \implies r)))
$$
for all $p,q,r\in L$
## A3
$$
\neg \neg p \implies p
$$
for $p \in L$
# Deduction rule
We'll have one rule of deduction called modus ponens:
## MP
From $p$ and $p \implies q$ we can deduce $q$ 

# Proof
Given $S\subseteq L$ and $t\in L$, a proof of $t$ from $S$ is a finite sequence $t_{1},\dots t_{n}$ in $L$ s.t. $t_{n}=t$ and for each $i$ 
1. Either $t_{i}$ is an axiom
2. or $t_{i}\in S$ (premiss or hypothesis)
3. or $t_{i}$ is obtained by modus ponens from earlier lines:
$$
\exists j,k<i \text{ s.t. } t_{k}=(t_{j}\implies t_{i})
$$
Say $S$ proves $t$ or $S$ syntactically entails $t$ or $S\vdash t$
if there's a proof of $t$ from $S$. 

[[Notes/Theorem (Propositional Logic)]]
[[Notes/Deduction Theorem (Propositional Logic)]]
[[Notes/Soundness Theorem (Propositional Logic)]]
[[Notes/Model Existence Lemma (Propositional Logic)]]
[[Notes/Adequacy Theorem (Propositional Logic)]]
[[Notes/Completeness Theorem]]