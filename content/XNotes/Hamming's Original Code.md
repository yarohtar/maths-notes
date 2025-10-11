Let $C\subseteq \mathbb{F}_{2}^{7}$ be defined by 
$$
\begin{gather}
c_{1}+c_{3}+c_{5}+c_{7}=0\\
c_{2}+c_{3}+c_{6}+c_{7}=0\\
c_{4}+c_{5}+c_{6}+c_{7}=0
\end{gather}
$$
So $\lvert C \rvert=2^{4}$
So $C$ is a $[7,16]$ [[Information Theory/Binary Code]].

Suppose we receive $x\in \mathbb{F}_{2}^{7}$. We form the syndrome $z_{x}=(z_{1},z_{2},z_{4})$
where
$$
\begin{gather}
z_{1}=x_{1}+x_{3}+x_{5}+x_{7}\\
z_{2}=x_{2}+x_{3}+x_{6}+x_{7}\\
z_{4}=x_{4}+x_{5}+x_{6}+x_{7}
\end{gather}
$$
If $x\in C$ then $z_{x}=(0,0,0)$
If $d(x,c)=1$ for some $c\in C$ then the place where $x$ and $c$ differ is given by $z_{1}+2z_{2}+4z_{4}$ (not mod 2).
This is since if $x=c+e_{i}$ then the syndrome of $x$ is the same as the syndrome of $e_{i}$ and the syndrome of $e_{3}=(1,1,0)$ is the binary expansion of 3 (for example - can check the others as well)

Thus $C$ is 1-[[XNotes/Error correcting]] (it is not 2)