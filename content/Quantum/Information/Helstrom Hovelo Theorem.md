You are given a quantum system in unknown state $\ket{\psi}$
You are told $\ket{\psi}$ is either in $\ket{\alpha_{0}}$ or $\ket{\alpha_{1}}$ with probability $\frac{1}{2}$
and $\lvert \braket{ \alpha_{0} | \alpha_{1} } \rvert=\cos \theta$
The probability $p$ of correctly identifying the state 
by ANY measurement satisfies $p\leq \frac{1}{2}+ \frac{\sin \theta}{2}$
This bound is TIGHT 

### Proof
Do a 2-outcome measurement
Probability of success

$$
\begin{align}
p\left(\Pi_{0} \right) & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}(\ket{\alpha_{0}} \bra{\alpha_{0}} -\ket{\alpha_{1}} \bra{\alpha_{1}} )) \\
 & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}\Delta)
\end{align}
$$
Properties 
$\Delta ^{\dagger}=\Delta$
$\ket{\beta}\in \mathcal{H}$ s.t. $\braket{ \beta | \alpha_{0} }=0=\braket{ \beta | \alpha_{1} }$
then $\Delta \ket{\beta}=0$
So $\Delta$ only acts nontrivially on $v=span\{ \ket{\alpha_{0}},\ket{\alpha_{1}} \}$
$Tr\Delta=0$ so eigenvalues are $+\delta$ and $-\delta$
Let corresponding eigenvalues be $\ket{p},\ket{m}$ and $P_{\delta}=\ket{p}\bra{p}$ and $P_{-\delta}=\ket{m}\bra{m}$
Spectral decomposition: $\Delta=\delta P_{\delta}-\delta P_{-\delta}$
Determine $\delta$ in terms of $\ket{\alpha_{0}}$, $\ket{\alpha_{1}}$
Let $\ket{\alpha_{0}^{\bot}}\in v$ ??????
$\ket{\alpha_{1}}=c_{0}\ket{\alpha_{0}}+c_{1}\ket{\alpha_{0}^{\bot}}$
Write $\Delta$ in this basis
$$
\Delta=\begin{pmatrix}
\lvert c_{1} \rvert ^{2} & -c_{0}c_{1}^{*} \\
-c_{0}^{*}c_{1} & -\lvert c_{1} \rvert ^{2}
\end{pmatrix}
$$
and we find the eigen values are $\delta=\lvert c_{1} \rvert$

Let $\ket{\alpha_{0}}$ and $\ket{\alpha_{1}}$ be such that
$$
0<\braket{ \alpha_{0} | \alpha_{1} }<1
$$
Then $\lvert \braket{ \alpha_{0} | \alpha_{1} } \rvert=\cos \theta$ for some $0<\theta<\frac{\pi}{2}$
with $\lvert c_{0} \rvert=\cos \theta$, $\lvert c_{1} \rvert=\sin \theta$

$$
\begin{align}
p(\Pi_{0}) & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}\Delta) \\
 & =\frac{1}{2}+\frac{1}{2}Tr(\Pi_{0}(\delta \ket{p} \bra{p} -\delta\ket{m} \bra{m} )) \\
 & =\frac{1}{2}+ \frac{\sin \theta}{2}(\bra{p} \Pi_{0}\ket{p} -\bra{m} \Pi_{0}\ket{m} )
\end{align}
$$
Claim: $\bra{m}\Pi_{0}\ket{m}\geq 0$
Use $\Pi_{0}^{2}=\Pi_{0}$ and $\Pi_{0}^{\dagger}=\Pi_{0}$
So
$$
p(\Pi_{0})\leq \frac{1}{2}+\frac{\sin \theta}{2}\bra{p} \Pi_{0}\ket{p} \leq \frac{1}{2}+ \frac{\sin \theta}{2}
$$

