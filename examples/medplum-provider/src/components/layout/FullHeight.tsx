// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import type { JSX } from 'react';
import classes from './FullHeight.module.css';

type FullHeightProps = {
  children: React.ReactNode;
};

export function FullHeight({ children }: FullHeightProps): JSX.Element {
  return <div className={classes.FullHeight}>{children}</div>;
}
