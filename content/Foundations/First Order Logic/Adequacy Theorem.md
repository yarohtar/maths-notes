Let $S$ be a set of formulae in a language $L$ and $p$ be a formula in $L$
If $S\models p$ then $S\vdash p$
#### Proof (NONEXAMINABLE)
WLOG $S$ is a [[Foundations/First Order Logic/Theory]] and $p$ is a [[Foundations/First Order Logic/Sentence]]

Since $S\models p$ we have $S\cup \{ \neg p \}\models \bot$
By [[Foundations/First Order Logic/Model Existence Lemma]] $S\cup \{ \neg p \}\vdash \bot$
By the [[Foundations/First Order Logic/Deduction Theorem (First-order Logic)]] $S\vdash \neg \neg p$
Add the lines
$$
\begin{align}
\neg \neg p\implies p\quad %quad
\quad %quad
 & \text{(A3)} \\
p\quad %quad
\quad %quad
 & \text{(MP)}
\end{align}
$$