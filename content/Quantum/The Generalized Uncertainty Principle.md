We define rms deviation or "uncertainty" $\Delta_{\psi}Q$ of $Q=Q^{\dagger}$ in state $\ket{\psi}$ as $\Delta_{\psi}Q=\sqrt{ \langle Q^2 \rangle_{\psi}-\langle Q \rangle^2_{\psi} }$

### Definition
Let $A$ and $B$ be [[Analysis/Hilbert Space/Hermetian]]. We  define:
$$
\ket{\psi_{A}}=A\ket{\psi}-\langle A \rangle_{\psi}\ket{\psi}
$$
(how much $\ket{\psi}$ fails to be an eigenvector of $A$)

### Theorem (the uncertainty principle)
For two [[Analysis/Hilbert Space/Hermetian]] operators $A$ and $B$:
$$
\Delta_{\psi}A\cdot\Delta_{\psi}B \geq \frac{1}{2}\lvert \langle [A,B] \rangle_{\psi} \rvert
$$
#### Proof
$\lVert \ket{\psi_{A}} \rVert=\Delta_{\psi}A$
$\braket{ \psi_{A} | \psi_{B} }=\bra{\psi}AB\ket{\psi}-\langle A \rangle_{\psi}\langle B \rangle_{\psi}$

$2i\mathrm{Im}(\braket{ \psi_{A} | \psi_{B} })=\bra{\psi}AB\ket{\psi}-(\bra{\psi}AB\ket{\psi})^{*}=\bra{\psi}[A,B]\ket{\psi}$
By Cauchy Schwartz
$\Delta_{\psi}A\cdot\Delta_{\psi}B=\lVert \ket{\psi_{A}} \rVert\cdot\lVert \ket{\psi_{B}} \rVert\geq |\braket{ \psi_{A} | \psi_{B} }\geq \frac{1}{2}\lvert \langle [A,B] \rangle_{\psi} \rvert$

For example $A=X$, $B=P$ and $[X,P]=i$.
