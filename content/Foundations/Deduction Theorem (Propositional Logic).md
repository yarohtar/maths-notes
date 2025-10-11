Let $S\subseteq L$ and $p,q\in L$
Then $S\vdash(p \implies q)$ if and only if $S\cup \{ p \}\vdash q$
[[Foundations/Syntactic Entailment (Propositional Logic)]]

#### Proof
Assume $S\vdash(p \implies q)$. Write down the proof of $p \implies q$ from $S$ and add the following lines to obtain a proof of $q$ from $S\cup \{ p \}$:
$$
\begin{align}
p\quad %quad
\quad %quad
 & \text{(premis)} \\
q\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$

Now let's assume $S\cup \{ p \}\vdash q$. Let $t_{1},t_{2},\dots,t_{n}=q$ be a proof of $q$ from $S\cup \{ p \}$. We prove that $S\vdash(p \implies t_{i})$ by induction on $i$ 
1. If $t_{i}$ is an axiom or $t_{i}\in S$. Then
$$
\begin{align}
t_{i}\implies(p \implies t_{i}) \quad %quad
\quad %quad
 & \text{(A1)}  \\
t_{i}\quad %quad
\quad %quad
 & \text{(premis or axiom)}  \\
\quad %quad
\quad %quad
p \implies t_{i} \quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
2. If $t_{i}=p$. In this case $S\vdash(p \implies p)$ since $\vdash(p \implies p)$
3. If $\exists j,k<i$ s.t. $t_{k}=(t_{j}\implies t_{i})$
   By induction we can write down proofs of $(p \implies t_{j})$ and $(p \implies(t_{j}\implies t_{i}))$ from $S$. We add the lines:
   $$
   \begin{align}
(p \implies(t_{j}\implies t_{i}))\implies((p \implies t_{j})\implies(p \implies t_{i}))\quad %quad
\quad %quad
 & \text{(A2)} \\
(p \implies t_{j}) \implies( p \implies t_{i})\quad %quad
\quad %quad
 & \text{(MP)} \\
p \implies t_{i}\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$
to obtain a proof of $p \implies t_{i}$ from $S$.


