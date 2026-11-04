Let $S$ be a set of formulae in a language $L$ and $p$ be a formula in $L$
If $S\models p$ then $S\vdash p$

#### Proof (NONEXAMINABLE)

WLOG $S$ is a [[Theory]] and $p$ is a [[Sentence]]

Since $S\models p$ we have $S\cup \{ \neg p \}\models \bot$ i.e. $S\cup \{ \neg p \}$ has no [[Model]].
By [[Model Existence Lemma]], $S\cup \{ \neg p \}$ is [[Inconsistent]]:

$$
S\cup \{ \neg p \}\vdash \bot
$$

By the [[Deduction Theorem]] $S\vdash \neg \neg p$
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
