---
{"publish":true,"aliases":"Numerical Method","created":"2025-12-24T04:28:25.880+00:00","modified":"2025-12-24T04:28:25.880+00:00","cssclasses":""}
---


We are solving the differential equation ${dy\over dt} = f(t,y)$. 
There are several methods for this:
[[Numerical/Euler method]]
[[Numerical/Reverse-Euler Method]]
[[Numerical/Trapezoidal rule (ODEs)]]
[[Numerical/Multi-Step Methods]]
[[Numerical/Runge-Kutta Methods]]

## Order
Suppose the numerical method is $y_{n+1}=\phi(t_n, y_0,\dots, y_n)$
Then we define the order of it to be the largest integer $p$ such that:
$$\phi(t_n,y(t_0),\dots, y(t_n))-y(t_{n+1})=O(h^{p+1})$$
where $h$ is the step size. 

So we assume that all our approximations were correct, 
and substitute those into the formula for $y_{n+1}$. 
Then we Taylor expand, and hope for cancellations. 
Note that we know the derivatives of $y$ by chain rule:
$${dy\over dt}=f(t,y)$$
$${d^2y\over dt^2} = {\partial f\over \partial t}+ {\partial f\over \partial y}\cdot f$$
